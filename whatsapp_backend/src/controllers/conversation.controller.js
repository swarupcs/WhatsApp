import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";

export const create_open_conversation = async (req, res, next) => {
    try {
       const sender_id = req.user.userId;
       const { receiver_id } = req.body;
       //check if receiver_id is provided
       if(!receiver_id) {
        logger.error("Please provide the user id you want start a conversation with !");
        throw createHttpError.BadGateway("Something went wrong !");
       }
       //check if chat exists
       const existed_conversation = await doesConversationExist( sender_id, receiver_id );
    } catch (error) {
        next(error);
    }
}