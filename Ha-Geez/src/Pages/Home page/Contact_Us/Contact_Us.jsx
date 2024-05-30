import { useState } from "react";
import Header from "../Components/Header";
import { FaHeart } from "react-icons/fa";
import { Button, TextInput, Textarea } from "@mantine/core";
import classes from "./Contact_Us_Module_CSS/ContactUs.module.css";
import Footer from "../Components/Footer";

const Contact_Us = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const isFloating = (value, focused) => value.length > 0 || focused;

  return (
    <>
      <Header />
      <div className="mb-32">
        <div className="flex mt-24">
          <div className="justify-center items-center mx-auto">
            <div className="flex mb-16">
              <FaHeart className="mt-[6px] mr-2 size-8" />
              <h1 className="text-4xl font-semibold">
                Hello, Let’s get in touch
              </h1>
            </div>
            <div className="flex">
              <div className="w-full mr-10">
                <div className={classes.root}>
                  <label
                    className={`${classes.label} ${
                      isFloating(name, nameFocused) ? classes.labelFloating : ""
                    }`}
                  >
                    Your Name
                  </label>
                  <TextInput
                    autoComplete="new-password"
                    classNames={{ input: classes.input }}
                    onFocus={() => setNameFocused(true)}
                    onBlur={() => setNameFocused(false)}
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                    mb="md"
                  />
                </div>
                <div className={classes.root}>
                  <label
                    className={`${classes.label} ${
                      isFloating(email, emailFocused)
                        ? classes.labelFloating
                        : ""
                    }`}
                  >
                    Your Email
                  </label>
                  <TextInput
                    classNames={{ input: classes.input }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    mb="md"
                  />
                </div>
                <div className={classes.root}>
                  <label
                    className={`${classes.label} ${
                      isFloating(phone, phoneFocused)
                        ? classes.labelFloating
                        : ""
                    }`}
                  >
                    Phone Number
                  </label>
                  <TextInput
                    autoComplete="new"
                    classNames={{ input: classes.input }}
                    onFocus={() => setPhoneFocused(true)}
                    onBlur={() => setPhoneFocused(false)}
                    value={phone}
                    onChange={(event) => setPhone(event.currentTarget.value)}
                    type="number"
                    mb="md"
                  />
                </div>
                <div className={classes.root}>
                  <label
                    className={`${classes.label} ${
                      isFloating(message, messageFocused)
                        ? classes.labelFloating
                        : ""
                    }`}
                  >
                    Message
                  </label>
                  <Textarea
                    autoComplete="off"
                    classNames={{ input: classes.input }}
                    onFocus={() => setMessageFocused(true)}
                    onBlur={() => setMessageFocused(false)}
                    value={message}
                    onChange={(event) => setMessage(event.currentTarget.value)}
                    mb="md"
                  />
                </div>
              </div>
              <div className="bg-[#D9D9D9] bg-opacity-55 w-[800px] h-[300px] mt-[-40px] flex justify-center items-center m-auto">
                <div className="flex w-[350px] mt-[-30px]">
                  <h1 className="text-[38px] text-[#09335F] font-semibold">
                    We’d love to hear from you
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Button variant="filled" className="block bg-[#09335F]">
            Send message
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact_Us;
