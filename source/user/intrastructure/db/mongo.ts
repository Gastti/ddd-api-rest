import { connect } from "mongoose";

const DB_URI: string = process.env.DB_URI ?? "";

const dbInit = async () => {
    await connect(DB_URI)
        .then(() => console.log("Database Ready"))
        .catch(error => console.log(error))
}

export default dbInit;