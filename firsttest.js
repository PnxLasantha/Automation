describe("This is the firsttest",function(){
it("Checking the input field",function(){
    browser.get("http://www.thetestroom.com/jswebapp/");
    expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

it('Checking the Generated text is matching', function() {
    var textMessage = "This is a Test";
    browser.get("http://www.thetestroom.com/jswebapp/");
    element(by.model("person.name")).sendKeys(textMessage);

    element(by.binding("person.name")).getText().then(function(text)
      {
        expect(text).toEqual("This is a Test");
      }
    );
    });

it('Selecting the drop down', function() {
  browser.get("http://www.thetestroom.com/jswebapp/");
  element(by.name("button")).click();
  element(by.model("animal")).$('[value ="1"]').click();
  element.all(by.css("option",".ng-pristine")).then(function(items){
    expect(items.length).toBe(4);
    expect(items[1].getText()).toBe("George the Turtle");
    console.log("really");
  }
);
  element(by.buttonText("CONTINUE")).click();


});



});
