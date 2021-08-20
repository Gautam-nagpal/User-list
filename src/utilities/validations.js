import { isEmpty } from "lodash";

const eRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateUser(data = {}, isSocialLogin) {
    let errors = {};
    if (!data.name.trim()) {
        errors.name = "Name is required!";
    }

    if (!data.address) {
        errors.address = "Address is required!";
    }

    if (!data.email) {
        errors.email = "Email is required!";
    }

    if (data.email && !eRegex.test(data.email)) {
        errors.email = "Invalid email!";
    }

    if (!data.movie.length) {
        errors.movie = "Movie is required!";
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}
