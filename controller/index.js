const Contact = require("../model");


module.exports.home = function (req, res) {
    console.log('home page');
    Contact.find().then(function (contacts) {
        return res.send(
            contacts
        );
    })
}


module.exports.addContact = async (req, res) => {
    let contact = new Contact;
    contact.name = req.body.name;
    contact.phone = req.body.phone;
    const doc = await contact.save();
    res.send(doc);
}

module.exports.deleteContact = function (req, res) {
    let id = req.query.id;

    // function which find and delete ele by its id
    Contact.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("Error");
            return;
        }
        return res.redirect('back');
    })
}