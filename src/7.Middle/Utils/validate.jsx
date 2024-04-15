const REGEX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

const validate = (rules, values) => {
  let errorObject = {};
  for (const ruleKey in rules) {
    for (const rule of rules[ruleKey]) {
      if (rule.required) {
        if (!values[ruleKey]) {
          errorObject[ruleKey] = rule.message || "This is a default message";
          break;
        }
      }
      if (rule.regex instanceof RegExp) {
        if (!rule.regex.test(values[ruleKey])) {
          errorObject[ruleKey] = rule.message || "This is a default message";
          break;
        }
      } else if (rule.regex in REGEX) {
        if (!REGEX[rule.regex].test(values[ruleKey])) {
          errorObject[ruleKey] = rule.message || "This is a default message";
          break;
        }
      }
    }
  }
  return errorObject;
};

export const requireRule = (message) => {
  return {
    required: true,
    message,
  };
};

export const regexRule = (message, regex) => {
  return {
    regex,
    message,
  };
};

export default validate;
