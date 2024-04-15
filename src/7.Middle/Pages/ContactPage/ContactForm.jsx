import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Select from "../../Components/Select";
import Textarea from "../../Components/Textarea";
import validate, { regexRule, requireRule } from "../../Utils/validate";
import useForm from "../../Hooks/useForm";

const ContactForm = ({ handleFormSubmit }) => {
  const rules = {
    name: [requireRule("Vui lòng nhập tên")],
    email: [
      requireRule("Vui lòng nhập email"),
      regexRule(
        "Vui lòng nhập đúng định dạng email",
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      ),
    ],
    phone: [
      requireRule("Vui lòng nhập phone"),

      regexRule("Vui lòng nhập đúng định dạng phone", "phone"),
    ],
    topic: [requireRule("Vui lòng nhập topic")],
    content: [requireRule("Vui lòng nhập content")],
  };
  const { form, error, register, validate } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      topic: "",
      content: "",
    },
    rules
  );

  const _onSubmit = () => {
    const errorObject = validate();
    // setError(errorObject);
    if (Object.keys(errorObject).length > 0) {
      console.log("🚀submit error---->", errorObject);
    } else {
      console.log("🚀submit succeed---->", form);
      handleFormSubmit?.(form);
    }
  };

  return (
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
      <Input
        label="Họ và tên"
        required
        // name="name"
        // error={error.name}
        // onChange={_onChange}
        {...register("name")}
      />
      <Input
        label="Email"
        required
        // name="email"
        // error={error.email}
        // onChange={_onChange}
        {...register("email")}
      />
      <Input
        label="Phone"
        required
        // name="phone"
        // error={error.phone}
        // onChange={_onChange}
        {...register("phone")}
      />
      <Input
        label="Chủ đề cần hỗ trợ"
        required
        // name="topic"
        // error={error.topic}
        // onChange={_onChange}
        {...register("topic")}
        renderInput={(renderProps) => {
          return (
            <Select
              options={[
                { value: "", label: "--" },
                { value: "react", label: "React Js" },
                { value: "responsive", label: "Responsive" },
              ]}
              {...renderProps}
            />
          );
        }}
      />
      <Input
        label="Nội dung cần hỗ trợ"
        required
        // name="content"
        // error={error.content}
        // onChange={_onChange}
        {...register("content")}
        renderInput={(renderProps) => {
          return <Textarea {...renderProps} />;
        }}
      />

      {/* <div className="form-group">
        <label className="label">
          Chủ đề cần hỗ trợ <span>*</span>
        </label>
        <div className="select">
          <div className="head form__input">--</div>
          <div className="sub">
            <a href="#">Web Responsive</a>
            <a href="#">React &amp; Redux</a>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="label">
          Nội dung <span>*</span>
        </label>
        <textarea className="form__input" defaultValue={""} />
      </div> */}
      <div className="btncontrol">
        <Button variant="primary" onClick={_onSubmit}>
          Gửi
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
