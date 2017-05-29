
export const PHONE_SELECTED = 'PHONE_SELECTED';

export default function selectPhone(phone) {
  return{
    type: PHONE_SELECTED,
    payload: phone,
  }
}
