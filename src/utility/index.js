
import * as yup from 'yup';

export const Validate = async (data) => {
    const fname = await yup.string()
        .min(2).max(20).matches(/^[a-z]+$/g)
        .isValid(data["first-name"]);

    const sname = await yup.string()
        .min(2).max(20).matches(/^[a-z]+$/g)
        .isValid(data["second-name"]);

    const email = await yup.string().email().min(5)
        .isValid(data["email"]);

    const date = await yup.date()
        .isValid(data["date"]);

    if(fname && sname && email && date)
        return {ok: true};
    else
        return {
            ok: false,
            "first-name": fname,
            "second-name": sname,
            "email": email,
            "date": date
        };
    // return schema.isValid(data);
}

export default {
    Validate
}