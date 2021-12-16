const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { profileId }) => {
            return User.findOne({ _id: profileId })
        },
        me: async (parent, args, context) => {
            if(context.user) {
                const myData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                return myData;
            }

            throw new AuthenticationError('You need to be logged in to do that!')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect Credentials')
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);
            return { token, user }
        },
        saveEvent: async (parent, { eventData }, context) => {
            if(context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedEvents: eventData } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in to do that!')
        },
        removeEvent: async (parent, { eventId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedEvents: { eventId } } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in to do that!');
        }
    }
}

module.exports = resolvers;
