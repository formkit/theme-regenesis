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
    key: "formkey",
    children: [
      {
        $formkit: "text",
        key: "namekey",
        label: "Name",
        name: "name",
        placeholder: "Enter your name",
      },
      {
        $formkit: "select",
        key: "sizekey",
        label: "T-Shirt Size",
        name: "tshirtSize",
        options: ["XS", "Small", "Medium", "Large", "XL", "2XL", "3XL"],
      },
      {
        $formkit: "colorpicker",
        key: "colorkey",
        inline: true,
        label: "T-Shirt Color",
        name: "tshirtColor",
        panelControls: false,
        panelFormat: false,
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
        $formkit: "textarea",
        key: "noteskey",
        label: "Additional Notes",
        name: "notes",
        placeholder: "Enter any additional notes or specifications here.",
      },
    ],
  },
];

const registrationForm = [
  {
    $formkit: "form",
    submitLabel: "Proceed to checkout",
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
                help: "VIP seating, personalized swag, and complimentary food and drink.",
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
        options: [
          "Podcast advertising",
          "Saw the banner on the side of a bus",
          "A friend told me",
          "I'm not sure how I got here",
          "Other",
        ],
        selectionRemovable: true,
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
      <FormKitSchema :schema="registrationForm" />
    </div>

    <!-- <Suspense>
      <FormKitKitchenSink :pro="true" />
    </Suspense> -->
  </div>
</template>

<style scoped>
.example-form {
  color: var(--headline-color);
  max-width: 800px;
  padding: 2em;
  margin-left: auto;
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
  flex-grow: 1;
}
:deep(.double > *:first-child) {
  margin-right: 0.25em;
}
:deep(.double > *:last-child) {
  margin-left: 0.25em;
}
</style>
