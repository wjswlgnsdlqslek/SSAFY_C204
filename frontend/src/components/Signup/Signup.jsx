import { useState } from "react";

const [id, setId] = useState('');
const [password, setPassword] = useState('');
const [confirm, setConfirm] = useState('');
const [phone, setPhone] = useState('');
const [nickname, setNickname] = useState('');


const [idError, setIdError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [ConfirmError, setConfirmError] = useState('');

const [isIdCheck, setIsIdcheck] = useState(false);
const [isIdAvailable, setIsIdAvailable] = useState(false);