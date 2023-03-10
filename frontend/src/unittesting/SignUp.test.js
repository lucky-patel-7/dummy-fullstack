import { render } from "@testing-library/react";
import FormInput from "../screen/FormInput";
import Signup from "../screen/SignUp";


const initialVal = {
    name: '',
    email: '',
    password: '',
    date: '',
    gender: '',
}

describe('SignUp', () => {


    it('should have a required field also a submit button', () => {
        render(<Signup />)
        const wrapper = render(<FormInput state={initialVal} type={initialVal}
        />)
        expect(wrapper).toBeTruthy();

    });

});

