import { IconMetaProps, SvgPathProps } from 'arpon';
import { IconName } from '..';

/* export const IconPaths24: Record<IconName, T> = {
  'file-add': [
    'M14.7362 2.76196H8.08424C6.02524 2.76196 4.25024 4.43096 4.25024 6.49096V17.34C4.25024 19.516 5.90824 21.115 8.08424 21.115H16.0722C18.1322 21.115 19.8022 19.4 19.8022 17.34V8.03796L14.7362 2.76196Z',
    'M14.4735 2.75024V5.65924C14.4735 7.07924 15.6225 8.23124 17.0425 8.23424C18.3585 8.23724 19.7055 8.23824 19.7965 8.23224',
    'M12.5936 10.4644C12.5936 10.0501 12.2578 9.71436 11.8436 9.71436C11.4294 9.71436 11.0936 10.0501 11.0936 10.4644V12.1641H9.39331C8.9791 12.1641 8.64331 12.4998 8.64331 12.9141C8.64331 13.3283 8.9791 13.6641 9.39331 13.6641H11.0936V15.3654C11.0936 15.7796 11.4294 16.1154 11.8436 16.1154C12.2578 16.1154 12.5936 15.7796 12.5936 15.3654V13.6641H14.2943C14.7085 13.6641 15.0443 13.3283 15.0443 12.9141C15.0443 12.4998 14.7085 12.1641 14.2943 12.1641H12.5936V10.4644Z',
  ],
}; */
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7 8H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/></svg>

/* export const IconPaths24: Record<IconName, SvgPathProps[]> = {
  'file-add': [
    {
      d:
        'M14.7362 2.76196H8.08424C6.02524 2.76196 4.25024 4.43096 4.25024 6.49096V17.34C4.25024 19.516 5.90824 21.115 8.08424 21.115H16.0722C18.1322 21.115 19.8022 19.4 19.8022 17.34V8.03796L14.7362 2.76196Z',
      clipRule: 'evenodd',
      fillRule: 'evenodd',
      stroke: '#200E32',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    {
      d:
        'M14.4735 2.75024V5.65924C14.4735 7.07924 15.6225 8.23124 17.0425 8.23424C18.3585 8.23724 19.7055 8.23824 19.7965 8.23224',
      clipRule: 'evenodd',
      fillRule: 'evenodd',
      stroke: '#200E32',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    {
      d:
        'M12.5936 10.4644C12.5936 10.0501 12.2578 9.71436 11.8436 9.71436C11.4294 9.71436 11.0936 10.0501 11.0936 10.4644V12.1641H9.39331C8.9791 12.1641 8.64331 12.4998 8.64331 12.9141C8.64331 13.3283 8.9791 13.6641 9.39331 13.6641H11.0936V15.3654C11.0936 15.7796 11.4294 16.1154 11.8436 16.1154C12.2578 16.1154 12.5936 15.7796 12.5936 15.3654V13.6641H14.2943C14.7085 13.6641 15.0443 13.3283 15.0443 12.9141C15.0443 12.4998 14.7085 12.1641 14.2943 12.1641H12.5936V10.4644Z',
      clipRule: 'evenodd',
      fillRule: 'evenodd',
      stroke: '#200E32',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  ],
}; */
// type SvgPrimitiveKeyProps =
//   | 'stroke' // color
//   | 'strokeLinecap' // shape to be used at the end of open subpaths
//   | 'strokeLinejoin' // the shape to be used at the corners
//   | 'strokeWidth' // the width of the stroke
//   | 'fill' // color to paint the element
//   | 'fillRule' // the algorithm to use to determine the inside part of a shape
//   | 'opacity'; // specifies the transparency
// export type SvgPathProps = Pick<SVGAttributes<SVGElement>, 'd' | Partial<SvgPrimitiveKeyProps>>;

export type PathsDefinition = SvgPathProps[];
export type IconDefinition = [IconMetaProps, PathsDefinition];

export const IconPaths24: Record<IconName, IconDefinition> = {
  'file-add': [
    {
      elementsSize: [20, 20],
    },
    [
      {
        d: 'M0 0h24v24H0z',
        fill: 'none',
      },
      {
        d: 'M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z',
      },
    ],
  ],
  'checkbox-circle-fill': [
    {
      elementsSize: [20, 20],
    },
    [
      {
        d: 'M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z',
      },
    ],
  ],
  'close-fill': [
    {
      elementsSize: [14, 14],
    },
    [
      {
        d: 'M7 5.58623L11.95 0.63623L13.364 2.05023L8.414 7.00023L13.364 11.9502L11.95 13.3642L7 8.41423L2.05 13.3642L0.636002 11.9502L5.586 7.00023L0.636002 2.05023L2.05 0.63623L7 5.58623Z',
      },
    ],
  ],
  'arrow-up-circle-fill': [
    {
      elementsSize: [20, 20],
    },
    [
      {
        d: 'M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM11 10H14L10 6L6 10H9V14H11V10Z',
      },
    ],
  ],
};

/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#DBAEAE"/>

<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7362 2.76196H8.08424C6.02524 2.76196 4.25024 4.43096 4.25024 6.49096V17.34C4.25024 19.516 5.90824 21.115 8.08424 21.115H16.0722C18.1322 21.115 19.8022 19.4 19.8022 17.34V8.03796L14.7362 2.76196Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

<path d="M14.4735 2.75024V5.65924C14.4735 7.07924 15.6225 8.23124 17.0425 8.23424C18.3585 8.23724 19.7055 8.23824 19.7965 8.23224" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12.5936 10.4644C12.5936 10.0501 12.2578 9.71436 11.8436 9.71436C11.4294 9.71436 11.0936 10.0501 11.0936 10.4644V12.1641H9.39331C8.9791 12.1641 8.64331 12.4998 8.64331 12.9141C8.64331 13.3283 8.9791 13.6641 9.39331 13.6641H11.0936V15.3654C11.0936 15.7796 11.4294 16.1154 11.8436 16.1154C12.2578 16.1154 12.5936 15.7796 12.5936 15.3654V13.6641H14.2943C14.7085 13.6641 15.0443 13.3283 15.0443 12.9141C15.0443 12.4998 14.7085 12.1641 14.2943 12.1641H12.5936V10.4644Z" fill="#200E32"/>

</svg>
 */
