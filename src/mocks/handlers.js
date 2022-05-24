import { rest } from "msw";

const baseURL = "https://edb83-drf-api.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json(
            {
                pk: 3,
                username: "magicmanface",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 3,
                profile_image: "https://res.cloudinary.com/edb83-ci/image/upload/v1/media/../default_profile_cnu30v"
                }
        ));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];