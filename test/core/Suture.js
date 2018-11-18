import test from "ava";
import { Suture } from "../../build/suture.js";

test("can be instantiated", t => {

	const object = new Suture();

	t.truthy(object);

});
