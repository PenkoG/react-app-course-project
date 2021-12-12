export default function userFormExtractor(type, e) {

    let formData = new FormData(e.currentTarget);

    let email = "";
    let name = "";
    let repass = "";

    let username = formData.get('username');
    let password = formData.get('password');

    if (type === "register") {
        name = formData.get('name');
        email = formData.get('email');
        repass = formData.get('rePassword');
    }

    let userInputs = {
        name,
        username,
        email,
        password,
        repass
    }

    return userInputs;
}