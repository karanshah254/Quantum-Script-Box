const studentDetails = {
    name: "Karan",
    age: 20,
    math: 95,
    phy: 89,
    chem: 90,
    getAverage() {
        // to access object key inside func we use "this" keyword.
        console.log(this);
        let avg = (this.math + this.phy + this.chem) / 3;
        console.log(`Average marks of ${this.name} is`, Math.floor(avg));
    }
}
studentDetails.getAverage();