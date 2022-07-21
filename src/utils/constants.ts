export const ACCESS_TOKEN_KEY = 'token';

export interface Option {
  value: string;
  label: string;
}

export const colourOptions: Option[] = [
  { value: 'E', label: 'Enable' },
  { value: 'D', label: 'Disable' },
  { value: 'U', label: 'Unapproved vendor' },
];

const animal: Option = {
  value: 'Quang',
  label: 'Animal',
};

export const listStatus: Option[] = [
  { value: 'E', label: 'Enable' },
  { value: 'D', label: 'Disable' },
  { value: 'U', label: 'Unapproved vendor' },
];

export const memberships = [
  { value: 'M_4', label: 'Memberships' },
  { value: 'P_4', label: 'Pending memberships' },
];

export const accessLevel: Option[] = [
  { value: '10', label: 'Vendor' },
  { value: '100', label: 'Admin' },
];

export const paymentRailsType = [
  { value: 'individual', label: 'Individual' },
  { value: 'business', label: 'Business' },
];

export const membershipId = [
  { value: '', label: 'Ignore Membership' },
  { value: '4', label: 'General' },
];
