import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  RadioGroup,
  Radio,
  Checkbox,
  Icon,
  Flex,
  Heading,
  InputRightElement
} from "@chakra-ui/react";
import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registrationSchema } from "../../validation/AuthValidation";

function RegistrationForm() {
  const [startDate, setStartDate] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
    dateOfBirth: null,
  };

  const handleSubmit = (values, actions) => {
    console.log("form submitted with values", values);
    actions.setSubmitting(false);
    actions.resetForm();
   
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
     
    >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.9)"
        backdropFilter="blur(10px)"
        w="100%"
      >
        <Heading textAlign="center" mb={6} color="teal.600">
          Registration Form
        </Heading>
        <Formik
          initialValues={{ ...initialValues, dateOfBirth: startDate }}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={true}
      
        >
          {({
            errors,
            touched,
            isSubmitting,
            isValid,
            dirty,
            handleReset,
            setFieldValue,
            values,
          }) => (
            <Form>
              {/* Name */}
              <FormControl isInvalid={errors.name && touched.name} mb={4}>
                <FormLabel htmlFor="name" color="teal.700">
                  Name
                </FormLabel>
                <Field
                  as={Input}
                  type="text"
                  name="name"
                  id="name"
                  bg="white"
                  borderColor="teal.500"
                  _hover={{ borderColor: "teal.600" }}
                  _focus={{ borderColor: "teal.600", boxShadow: "0 0 0 1px teal.600" }}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl isInvalid={errors.email && touched.email} mb={4}>
                <FormLabel htmlFor="email" color="teal.700">
                  Email
                </FormLabel>
                <Field
                  as={Input}
                  type="email"
                  name="email"
                  id="email"
                  bg="white"
                  borderColor="teal.500"
                  _hover={{ borderColor: "teal.600" }}
                  _focus={{ borderColor: "teal.600", boxShadow: "0 0 0 1px teal.600" }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              {/* Password */}
              <FormControl isInvalid={errors.password && touched.password} mb={4}>
                <FormLabel htmlFor="password" color="teal.700">
                  Password
                </FormLabel>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  id="password"
                  bg="white"
                  borderColor="teal.500"
                  _hover={{ borderColor: "teal.600" }}
                  _focus={{ borderColor: "teal.600", boxShadow: "0 0 0 1px teal.600" }}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              {/* Confirm Password */}
              <FormControl isInvalid={errors.confirmPassword && touched.confirmPassword} mb={4}>
                <FormLabel htmlFor="confirmPassword" color="teal.700">
                  Confirm Password
                </FormLabel>
                <Field
                  as={Input}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  bg="white"
                  borderColor="teal.500"
                  _hover={{ borderColor: "teal.600" }}
                  _focus={{ borderColor: "teal.600", boxShadow: "0 0 0 1px teal.600" }}
                />
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>

              {/* Date of Birth */}
              <FormControl isInvalid={errors.dateOfBirth && touched.dateOfBirth} mb={4}>
                <FormLabel htmlFor="dateOfBirth" color="teal.700">
                  Date of Birth
                </FormLabel>
             
                  
                  <Datepicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue("dateOfBirth", date);
                    }}
                    placeholderText="Select Date"
                    dateFormat="yyyy/MM/dd"
                
                  />
              
                
                <FormErrorMessage>{errors.dateOfBirth}</FormErrorMessage>
              </FormControl>

              {/* Gender */}
              <FormControl isInvalid={errors.gender && touched.gender} mb={4}>
                <FormLabel htmlFor="gender" color="teal.700">
                  Gender
                </FormLabel>
                <RadioGroup name="gender">
                  <Field as={Radio} name="gender" value="male" mr={2}>
                    Male
                  </Field>
                  <Field as={Radio} name="gender" value="female" mr={2}>
                    Female
                  </Field>
                </RadioGroup>
                <FormErrorMessage>{errors.gender}</FormErrorMessage>
              </FormControl>

              {/* Terms */}
              <FormControl isInvalid={errors.terms && touched.terms} mb={4}>
                <Field as={Checkbox} name="terms">
                  I accept the terms and conditions
                </Field>
                <FormErrorMessage>{errors.terms}</FormErrorMessage>
              </FormControl>

              {/* Buttons */}
              <Flex justifyContent="space-between" mt={6}>
                <Button
                  colorScheme="teal"
                  type="submit"
                  isDisabled={!isValid || !dirty}
                  isLoading={isSubmitting}
                  leftIcon={<CheckIcon />}
                  _hover={{ bg: "teal.600", borderColor: "teal.600" }}
                >
                  Submit
                </Button>
                <Button
                  onClick={handleReset}
                  colorScheme="gray"
                  _hover={{ bg: "gray.600", borderColor: "gray.600" }}
                >
                  Reset
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default RegistrationForm;
