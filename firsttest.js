describe("This is the firsttest",function(){
  it("Checking the input field",function(){
    browser.get("http://www.thetestroom.com/jswebapp/");
    element(by.model("person.name")).sendKeys("This is a Test");
    element(by.binding("person.name")).getText().then(function(text){
    console.log(text);
    console.log("Is this working");
    });
  });
});
