const Contact = require("../model");


module.exports.home = function (req, res) {
    // console.log('home page');
    Contact.find().then(function (contacts) {
        return res.send(
            contacts
        );
    })
}


module.exports.addContact = async (req, res) => {

    const { name, phone } = req.body;

    console.log(name, phone);
    // if (name.length >= 15 || name.length == 0 || phone.length != 10) {
    //     res.redirect('back');
    // }
    let contact = new Contact;
    contact.name = name;
    contact.phone = phone;


    const doc = await contact.save();
    return res.redirect('back');
}

module.exports.deleteContact = async (req, res) => {
    let id = req.query.id;
    console.log({ _id: id });
    // function which find and delete ele by its id
    await Contact.findOneAndDelete({ _id: id });
    res.redirect('back');
}