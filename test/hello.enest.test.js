import sayHello from "../utils/hello.enest.js";
import assert from "assert";

it("Tests Hello Enest",()=>{

    const hello = sayHello();

    assert.equal(hello,"enest");

});