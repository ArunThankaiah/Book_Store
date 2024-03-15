import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        tittle:{
            type: String,
            require: true
        },
        author:{
            type:String,
            require: true
        },
        PuplishYear:{
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('cat', bookSchema)