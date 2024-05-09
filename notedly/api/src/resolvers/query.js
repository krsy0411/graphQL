module.exports = {
    hello: () => "Hello World!",
    notes: async () => {
        return await models.Note.find();
    },
    note: async (parent, args, { models }) => {
        return await models.Note.findById(args.id);
    }
};