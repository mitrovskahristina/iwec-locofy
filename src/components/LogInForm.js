import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styled from "styled-components";

const Input = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  position: relative;
`;
const Rememberme = styled(FormControlLabel)`
  position: relative;
`;
const InputcontainerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  @media screen and (max-width: 420px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <InputcontainerRoot>
      <Input
        color="primary"
        label="E-mail Address"
        size="small"
        required={true}
        fullWidth={true}
        variant="standard"
        type="email"
      />
      <Input
        color="primary"
        label="Password"
        size="small"
        variant="standard"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPasswordClick}
                aria-label="toggle password visibility"
              >
                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Rememberme label="Remember me" control={<Checkbox color="primary" />} />
    </InputcontainerRoot>
  );
};

export default LogInForm;
