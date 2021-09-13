const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");

const resolvers = {
    Query: {
        me: async()=>{
            return User.find();
        }
    },
    Mutation:{
        addUser: async(parent, args)=>{
            const user=await User.create(args);

            return user;
        },
        login: async(parent, {email, password})=>{
            const user=await User.findOne({email});

            if(!user){
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }

            // const token = signToken(user);

            return user;
        }
    }
};

module.exports=resolvers;