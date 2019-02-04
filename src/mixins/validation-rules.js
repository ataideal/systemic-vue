import { isValid as isValidCpf } from '@fnando/cpf';
import { isValid as isValidCnpj } from '@fnando/cnpj';

const validationRules = {
  cpf: v => (v && isValidCpf(v)) || 'Você precisar fornecer um CPF válido.',
  cnpj: v => (v && isValidCnpj(v)) || 'CNPJ inválido',
  email: v => (/.+@.+/).test(v) || 'Endereço de e-mail inválido.',
  passwordMinLength: v => (v && v.length >= 8) || 'Sua senha deve conter no mínimo 8 caracteres.',
  postalcode: v => v.length >= 8 || 'CEP deve ter 8 dígitos',
  postalcodeAlagoas: v => v.startsWith('57') || 'CEP deve ser de Alagoas',
  required: v => !!v || 'Este campo não pode ficar em branco.',
  number: v => !isNaN(v) || 'Insira um número válido',
};

export default validationRules;
