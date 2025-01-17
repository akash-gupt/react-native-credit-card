declare module 'react-native-credit-card-v2'
{
  import {
    StyleProp,
    ViewStyle,
    ImageStyle,
    ImageSourcePropType
  } from 'react-native';

  export type CreditCardProps = {
    number?: string | number;
    cvc?: string;
    name?: string;
    expiry?: string;
    focused?: string;
    expiryBefore?: string;
    expiryAfter?: string;
    shinyAfterBack?: string,
    shiny?: boolean;
    bar?: boolean;
    type?: string;
    width?: number;
    height?: number;
    bgColor?: string;
    clickable?: boolean;
    mainContainerStyle?: StyleProp<ViewStyle>;
    frontImageStyle?: StyleProp<ViewStyle>;
    frontImageBgStyle?: StyleProp<ImageStyle>;
    backImageBgStyle?: StyleProp<ImageStyle>;
    backImageStyle?: StyleProp<ImageStyle>;
    imageFront?: ImageSourcePropType;
    imageBack?: ImageSourcePropType;
    fullNameText?: string;
    showExpiryAfterLabel?: boolean;
    cardTypeImages?: Record<string, ImageSourcePropType>;
  }

  export default class CreditCard extends React.Component<CreditCardProps, any> {

  }


}