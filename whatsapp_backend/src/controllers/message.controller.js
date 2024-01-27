export const sendMessage = async (req, res, next) => {
     try {
        res.send("send message");
     } catch (error) {
        next(error);
     }
};

export const getMessages = async (req, res, next) => {
    try {
       res.send("get messages");
    } catch (error) {
       next(error);
    }
};

