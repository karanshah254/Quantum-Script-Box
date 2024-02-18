let india = {
    // add property
    mountains: ['Himalaya', 'Everest', 'Mount Abu'],
    printWithDash: function () {
        setTimeout(() => console.log(this.mountains.join(' - ')), 5000);
    }
}
india.printWithDash();