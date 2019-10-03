import Joi from "@hapi/joi";

export default {
    getOne: {
        params: {
            id: Joi.string().required(),
        }
    },
    getMany: {
        query: {
            name: Joi.string(),
            quantity: Joi.number(),
            price: Joi.number()
        }
    },
    create: {
        body: {
            name: Joi.string().regex(/^[0-9a-zA-Z]{24}$/).required(),
            quantity: Joi.number().required(),
            price: Joi.number().required()
        }
    },
    update: {
        params: {
            id: Joi.string().required(),
        },
        body: {
            name: Joi.string().regex(/^[0-9a-zA-Z]{24}$/).required(),
            quantity: Joi.number().required(),
            price: Joi.number().required()
        }
    },
    delete: {
        params: {
            id: Joi.string().required(),
        }
    },
}