import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
         type: String, 
         required: true, 
         unique: true,
         
    },
    password: { 
         type: String, 
         required: true, 
         minlength: 8 
    },
    createdAt: { 
         type: Date, 
         default: Date.now 
    },
    updatedAt: Date,
});

const User = model('User', UserSchema);

const uniqueEmail = async (email: string): Promise<boolean> => {
    const user = await User.findOne({ email });
    return !user;
};

const validEmail = (email: string): boolean => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
};

User.schema.path('email').validate(uniqueEmail, 'This email address is already registered');

User.schema.path('email').validate(validEmail, 'The e-mail field most be type of email.')

export default User;