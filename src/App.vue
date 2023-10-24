<script setup lang="ts">
import { FormKitKitchenSink, FormKitSchema } from "@formkit/vue";

const loginForm = [
  {
    $el: "h1",
    key: "h1key",
    children: "Login Form",
    submitAttrs: {
      suffixIcon: "submit",
    },
  },
  {
    $formkit: "form",
    key: "formkey",
    children: [
      {
        $formkit: "text",
        key: "usernamekey",
        label: "Username",
        name: "username",
        validation: "required",
        placeholder: "Enter your username",
      },
      {
        $formkit: "password",
        key: "passwordkey",
        label: "Password",
        name: "password",
        validation: "required",
        placeholder: "Enter your password",
      },
      {
        $formkit: "toggle",
        key: "remembermekey",
        label: "Remember Me",
        name: "rememberme",
      },
    ],
  },
];

const tshirtForm = [
  {
    $el: "h1",
    key: "h1key",
    children: "T-Shirt Customization Form",
  },
  {
    $el: "p",
    key: "pkey",
    children: "Please customize your t-shirt using the options below.",
  },
  {
    $formkit: "form",
    children: [
      {
        $formkit: "text",
        label: "Name",
        name: "name",
        value: "Andrew Boyd",
        placeholder: "Enter your name",
      },
      {
        $formkit: "select",
        label: "T-Shirt Size",
        name: "tshirtSize",
        options: ["XS", "Small", "Medium", "Large", "XL", "2XL", "3XL"],
      },
      {
        $formkit: "colorpicker",
        inline: true,
        label: "T-Shirt Color",
        name: "tshirtColor",
        panelControls: false,
        panelFormat: false,
        value: "hsla(352, 98%, 41%, 1)",
        options: [
          "hsla(352, 98%, 41%, 1)",
          "rgb(245, 166, 35)",
          "hsl(55deg, 94%, 54.1%)",
          "#8B572A",
          "#7ED321",
          "#BD10E0",
        ],
      },
      {
        $formkit: "checkbox",
        label: "What add-ons would you like?",
        value: ["monogram"],
        options: [
          {
            value: "pocket",
            label: "Pocket",
          },
          {
            value: "monogram",
            label: "Monogram",
            help: "Include your initials in the notes section.",
          },
          {
            value: "giftwrap",
            label: "Gift Wrap",
            help: "Currently unavailable. 😢",
            attrs: {
              disabled: true,
            },
          },
        ],
      },
      {
        $formkit: "textarea",
        key: "noteskey",
        label: "Additional Notes",
        name: "notes",
        placeholder: "Enter any additional notes or specifications here.",
      },
    ],
  },
];

const surveyForm = [
  {
    $el: "h1",
    children: "FormKit Survey",
  },
  {
    $el: "p",
    children:
      "Complete the survey below and you'll be entered for a chance to win!",
  },
  {
    $formkit: "form",
    key: "formkey",
    onSubmit: "$handleSubmit",
    children: [
      {
        $formkit: "radio",
        key: "radiokey1",
        label: "Which front-end framework do you use most?",
        name: "framework",
        validation: "required",
        value: "vue",
        options: [
          { label: "Svelte", value: "svelte" },
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Solid", value: "solid" },
        ],
      },
      {
        $formkit: "radio",
        key: "radiokey2",
        label: "How much of your development time is spent working on forms?",
        name: "timeSpent",
        validation: "required",
        value: "50",
        options: [
          { label: "Less than 10%", value: "10" },
          { label: "About 25%", value: "25" },
          { label: "About 50%", value: "50" },
          { label: "About 75%", value: "75" },
          { label: "All of it", value: "100" },
        ],
      },
      {
        $formkit: "checkbox",
        key: "checkboxkey",
        label: "What are your biggest pain points when building forms?",
        name: "painPoints",
        validation: "required",
        value: ["boilerplate", "validation", "formState"],
        options: [
          { label: "Boilerplate code", value: "boilerplate" },
          { label: "Validation", value: "validation" },
          { label: "Form state", value: "formState" },
          { label: "Accessibility", value: "accessibility" },
          { label: "Internationalization", value: "internationalization" },
        ],
      },
      {
        $formkit: "taglist",
        label: "What backend(s) do you use for handling form submissions?",
        list: "frameworks",
        name: "backend",
        validation: "required",
        value: ["Laravel", "Express"],
        options: [
          "Laravel",
          "Django",
          "Express",
          "Koa",
          "Spring",
          "ASP.NET",
          "Rails",
          "Flask",
          "Struts",
          "Hybernate",
        ],
        help: "Please specify the backend technology or platform that accepts your form submissions.",
      },
      {
        $formkit: "email",
        label: "Enter your email address",
        name: "email",
        value: "andrew@formkit.com",
        validation: "required|email",
      },
    ],
  },
];

const registrationForm = [
  {
    $formkit: "form",
    submitLabel: "Proceed to checkout",
    submitAttrs: {
      prefixIcon: "dollar",
      suffixIcon: "submit",
    },
    children: [
      {
        $el: "h1",
        children: "Register",
      },
      {
        $el: "p",
        children:
          "Get your tickets for FormConf! The only conference that is all about forms. Hear from industry experts about form stuff then go enjoy nice food and drink on the town.",
      },
      {
        $formkit: "repeater",
        label: "Attendees",
        help: "Please register as many tickets as you need for your team.",
        addLabel: "Add attendee",
        addAttrs: {
          prefixIcon: "add",
        },
        children: [
          {
            $el: "div",
            attrs: {
              class: "double",
            },
            children: [
              {
                $formkit: "text",
                name: "name",
                prefixIcon: "avatarMan",
                label: '$: ($index + 1) + ". Full Name"',
                validationLabel: "Name",
                help: "Please enter attendee's full name.",
                validation: "required",
              },
              {
                $formkit: "email",
                name: "email",
                validationLabel: "Email",
                prefixIcon: "email",
                label: '$: ($index + 1) + ". Email Address"',
                help: "The ticket will be sent to this address.",
                validation: "required|email",
              },
            ],
          },
          {
            $formkit: "radio",
            value: "2",
            label: "Choose your ticket",
            validation: "required",
            validationLabel: "Ticket",
            help: "Don't be afraid to invest in yourself",
            options: [
              {
                label: "Quartz: $0",
                value: "1",
                help: "Watch remotely and miss out on all the fun.",
              },
              {
                label: "Bronze: $299",
                value: "2",
                help: "Nose-bleed seats but at least you're attending in person.",
              },
              {
                label: "Silver: $399",
                value: "3",
                help: "The every-day conference experience.",
              },
              {
                label: "Gold: $599",
                value: "4",
                help: "SOLD OUT: VIP seating, personalized swag, and complimentary food and drink.",
                attrs: {
                  disabled: true,
                },
              },
              {
                label: "Platinum: $20,000",
                value: "5",
                help: "You get to be a speaker. 🤫",
              },
            ],
          },
        ],
      },
      {
        $formkit: "taglist",
        label: "Which tracks are you and your team most interested in?",
        validationLabel: "track",
        validationMessages: {
          min: "You must select at least 1 track",
        },
        prefixIcon: "tag",
        validation: "+min:1",
        placeholder: "Please select an option",
        options: [
          "Forms",
          "Form Architecture",
          "Form Design",
          "Styling Forms",
          "Tailwind Forms",
          "Validating Forms",
          "Forms and Me",
          "Inclusive Forms",
          "Is FormKit a UI Library?",
          "Forms at scale",
        ],
      },
      {
        $formkit: "dropdown",
        label: "How did you hear about FormConf?",
        placeholder: "Be honest",
        behavior: "overscroll",
        options: [
          "Podcast advertising",
          "Saw the banner on the side of a bus",
          "A friend told me",
          "I'm not sure how I got here",
          "Other",
        ],
      },
      {
        $formkit: "textarea",
        label: "Special instructions / comments",
        placeholder: "Let us know if you need anything!",
        help: "FormConf aspires to provide a welcoming environment for all.",
      },
    ],
  },
];

const jobApplicationForm = [
  {
    $el: "h1",
    children: "Job Application Form",
  },
  {
    $el: "p",
    children:
      "Please fill out this form to apply for a job with us. We appreciate your interest in our company.",
  },
  {
    $formkit: "form",
    submitLabel: "Submit Application",
    submitAttrs: {
      suffixIcon: "submit",
    },
    key: "formkey",
    children: [
      {
        $el: "div",
        attrs: {
          class: "double",
        },
        children: [
          {
            $formkit: "text",
            label: "First Name",
            placeholder: "Enter your first name",
            name: "firstname",
            validation: "required",
          },
          {
            $formkit: "text",
            label: "Last Name",
            placeholder: "Enter your last name",
            name: "lastname",
            validation: "required",
          },
        ],
      },
      {
        $el: "div",
        attrs: {
          class: "double",
        },
        children: [
          {
            $formkit: "email",
            label: "Email Address",
            placeholder: "Enter your email address",
            name: "email",
            validation: "required|email",
          },
          {
            $formkit: "mask",
            mask: "+1 (###) ###-####",
            label: "Phone Number",
            name: "phone",
            validation: "required",
          },
        ],
      },
      {
        $el: "div",
        attrs: {
          class: "double",
        },
        children: [
          {
            $formkit: "dropdown",
            label: "Job Type",
            name: "jobType",
            value: "part_time",
            options: [
              { label: "Internship", value: "internship" },
              { label: "Part Time", value: "part_time" },
              { label: "Full Time", value: "full_time" },
            ],
            validation: "required",
          },
          {
            $formkit: "text",
            label: "Desired Position",
            placeholder: "Enter your desired position",
            name: "desiredPosition",
            validation: "required",
          },
        ],
      },
      {
        $el: "div",
        attrs: {
          class: "triple",
        },
        children: [
          {
            $formkit: "text",
            key: "universitykey",
            label: "University",
            name: "university",
            validation: "required",
          },
          {
            $formkit: "text",
            key: "degreekey",
            label: "Degree",
            name: "degree",
            validation: "required",
          },
          {
            $formkit: "text",
            key: "majorkey",
            label: "Major",
            name: "major",
            validation: "required",
          },
        ],
      },
      {
        $formkit: "textarea",
        key: "coverletterkey",
        help: "Please enter a brief cover letter about why you want to work for FormCorp.",
        label: "Cover Letter",
        name: "coverLetter",
        validation: "required",
      },
      {
        $el: "div",
        if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
        attrs: {
          class: "double",
        },
        children: [
          {
            $formkit: "text",
            if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
            key: "prevcompkey",
            label: "Previous Company",
            name: "previousCompany",
          },
          {
            $formkit: "text",
            if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
            key: "prevposkey",
            label: "Previous Position",
            name: "previousPosition",
          },
        ],
      },
      {
        $el: "div",
        if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
        attrs: {
          class: "double",
        },
        children: [
          {
            $formkit: "datepicker",
            if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
            key: "startdatekey",
            label: "Start Date",
            name: "startDate",
          },
          {
            $formkit: "datepicker",
            if: "$value.jobType === 'full_time' || $value.jobType === 'part_time'",
            key: "enddatekey",
            label: "End Date",
            name: "endDate",
          },
        ],
      },
      {
        $formkit: "textarea",
        if: "$value.jobType === 'full_time' || $value.jobType === 'full_time' || $value.jobType === 'part_time'",
        key: "jobdesckey",
        label: "Job Description",
        help: "Please enter a brief description of your responsibilities.",
        name: "jobDescription",
      },
    ],
  },
];
</script>

<template>
  <div>
    <div class="example-form">
      <FormKitSchema :schema="loginForm" />
    </div>

    <div class="example-form">
      <FormKitSchema :schema="tshirtForm" />
    </div>

    <div class="example-form">
      <FormKitSchema :schema="surveyForm" />
    </div>

    <div class="example-form">
      <FormKitSchema :schema="registrationForm" />
    </div>

    <div class="example-form">
      <FormKitSchema :schema="jobApplicationForm" />
    </div>

    <Suspense>
      <FormKitKitchenSink :pro="true" />
    </Suspense>
  </div>
</template>

<style scoped>
.example-form {
  color: var(--headline-color);
  max-width: 800px;
  padding: 2em;
  margin-left: 3em;
  margin-right: auto;
  margin-bottom: 10rem;
  padding: 5rem;
  background: var(--panel-bg-color);
  border: 1px solid var(--panel-border-color);
}
:deep(h1) {
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.5em;
}
:deep(p) {
  color: var(--headline-color);
  margin-bottom: 1em;
  font-size: 0.875em;
}
:deep(.double) {
  display: flex;
}
:deep(.double > *) {
  width: 50%;
  flex-grow: 1;
}
:deep(.double > *:first-child) {
  margin-right: 0.25em;
}
:deep(.double > *:last-child) {
  margin-left: 0.25em;
}
:deep(.triple) {
  display: flex;
}
:deep(.triple > *) {
  flex-grow: 1;
  width: 33.333%;
}
:deep(.triple > *:first-child) {
  margin-right: 0.5em;
}
:deep(.triple > *:last-child) {
  margin-left: 0.5em;
}
</style>
