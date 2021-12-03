import React from 'react';
import { ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LogoSection = () => {
    const theme = useTheme();
    return (
        <ButtonBase disableRipple>
            <svg width="240" height="22" viewBox="0 0 240 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.14941 18.4512V3.17285H0.9375V0.624023H8.4375V3.17285H6.22559V18.4512H8.4375V21H0.9375V18.4512H3.14941ZM16.9834 6.82031V8.53418C18.7705 7.24512 20.4014 6.60059 21.876 6.60059C22.7939 6.60059 23.5508 6.82031 24.1465 7.25977C24.752 7.68945 25.1475 8.22168 25.333 8.85645C25.5186 9.48145 25.6113 10.3994 25.6113 11.6104V18.5244H27.999V21H22.8281V11.7275C22.8281 10.6533 22.667 9.95508 22.3447 9.63281C22.0225 9.30078 21.627 9.13477 21.1582 9.13477C19.9277 9.13477 18.5361 9.73535 16.9834 10.9365V18.5244H19.4297V21H11.71V18.5244H14.2002V9.2959H11.71V6.82031H16.9834ZM35.915 21.2344L31.2861 9.2959H28.7812V6.82031H35.915V9.2959H34.0693L37.1162 17.3379L40.1777 9.2959H38.2148V6.82031H45.1436V9.2959H42.9609L38.4346 21.2344H35.915ZM61.9219 14.6133H49.998C50.1738 15.9219 50.6914 16.9814 51.5508 17.792C52.4102 18.6025 53.5088 19.0078 54.8467 19.0078C56.79 19.0078 58.3281 18.2266 59.4609 16.6641L61.9219 17.748C61.1211 18.9883 60.0811 19.9111 58.8018 20.5166C57.5225 21.1123 56.1846 21.4102 54.7881 21.4102C52.6201 21.4102 50.7646 20.7363 49.2217 19.3887C47.6885 18.0312 46.9219 16.2051 46.9219 13.9102C46.9219 11.7324 47.6689 9.94043 49.1631 8.53418C50.667 7.12793 52.3906 6.4248 54.334 6.4248C56.2383 6.4248 57.9619 7.11328 59.5049 8.49023C61.0576 9.85742 61.8633 11.8984 61.9219 14.6133ZM59.0508 12.5918C58.8555 11.5957 58.3379 10.6973 57.498 9.89648C56.6582 9.08594 55.6279 8.68066 54.4072 8.68066C53.2939 8.68066 52.3418 9.04688 51.5508 9.7793C50.7598 10.502 50.2764 11.4395 50.1006 12.5918H59.0508ZM65.7656 21V16.1367H68.2559V16.6055C68.3438 17.2695 68.7002 17.8164 69.3252 18.2461C69.96 18.6758 70.707 18.8906 71.5664 18.8906C72.4648 18.8906 73.1826 18.7344 73.7197 18.4219C74.2568 18.1094 74.5254 17.6748 74.5254 17.1182C74.5254 16.5811 74.3008 16.1855 73.8516 15.9316C73.4121 15.6777 72.5332 15.4434 71.2148 15.2285C69.2617 14.8965 67.8652 14.3643 67.0254 13.6318C66.1953 12.8896 65.7803 11.9326 65.7803 10.7607C65.7803 9.5791 66.2344 8.59277 67.1426 7.80176C68.0508 7.00098 69.2471 6.60059 70.7314 6.60059C72.0693 6.60059 73.2217 6.87402 74.1885 7.4209V6.82031H76.6641V11.5225H74.1885V10.6582C73.4365 9.49609 72.3428 8.91504 70.9072 8.91504C70.1748 8.91504 69.5693 9.07617 69.0908 9.39844C68.6221 9.71094 68.3877 10.1309 68.3877 10.6582C68.3877 11.1953 68.6025 11.5664 69.0322 11.7715C69.4717 11.9668 70.4092 12.1768 71.8447 12.4014C73.2217 12.6162 74.2617 12.8701 74.9648 13.1631C75.668 13.4463 76.249 13.9248 76.708 14.5986C77.1768 15.2627 77.4111 16.0391 77.4111 16.9277C77.4111 18.2461 76.9033 19.2959 75.8877 20.0771C74.8818 20.8486 73.5732 21.2344 71.9619 21.2344C70.4482 21.2344 69.2129 20.8926 68.2559 20.209V21H65.7656ZM80.6836 9.2959V6.82031H82.5293V4.6377L85.3125 2.08887V6.82031H87.9346V9.2959H85.3125V16.1807C85.3125 17.2842 85.3711 17.9678 85.4883 18.2314C85.6152 18.4854 85.9229 18.6123 86.4111 18.6123C86.9287 18.6123 87.4365 18.5146 87.9346 18.3193V20.8535C87.2217 21.1074 86.5088 21.2344 85.7959 21.2344C84.9463 21.2344 84.2578 21.0488 83.7305 20.6777C83.2031 20.2969 82.8711 19.8232 82.7344 19.2568C82.5977 18.6904 82.5293 17.7139 82.5293 16.3271V9.2959H80.6836ZM93.6533 18.5244V9.2959H91.2949V6.82031H96.4365V8.60742C98.1162 7.26953 99.7617 6.60059 101.373 6.60059C102.994 6.60059 104.112 7.33789 104.728 8.8125C106.573 7.33789 108.292 6.60059 109.884 6.60059C110.802 6.60059 111.554 6.80566 112.14 7.21582C112.735 7.61621 113.136 8.12891 113.341 8.75391C113.546 9.36914 113.648 10.2822 113.648 11.4932V18.5244H116.124V21H110.865V11.9912C110.865 11.1709 110.826 10.5947 110.748 10.2627C110.68 9.9209 110.494 9.64258 110.191 9.42773C109.898 9.20312 109.542 9.09082 109.122 9.09082C107.931 9.09082 106.578 9.70117 105.064 10.9219V18.5244H107.496V21H102.281V11.7275C102.281 10.7998 102.145 10.1309 101.871 9.7207C101.607 9.30078 101.153 9.09082 100.509 9.09082C99.4541 9.09082 98.0967 9.70117 96.4365 10.9219V18.5244H98.9268V21H91.1191V18.5244H93.6533ZM133.869 14.6133H121.945C122.121 15.9219 122.639 16.9814 123.498 17.792C124.357 18.6025 125.456 19.0078 126.794 19.0078C128.737 19.0078 130.275 18.2266 131.408 16.6641L133.869 17.748C133.068 18.9883 132.028 19.9111 130.749 20.5166C129.47 21.1123 128.132 21.4102 126.735 21.4102C124.567 21.4102 122.712 20.7363 121.169 19.3887C119.636 18.0312 118.869 16.2051 118.869 13.9102C118.869 11.7324 119.616 9.94043 121.11 8.53418C122.614 7.12793 124.338 6.4248 126.281 6.4248C128.186 6.4248 129.909 7.11328 131.452 8.49023C133.005 9.85742 133.811 11.8984 133.869 14.6133ZM130.998 12.5918C130.803 11.5957 130.285 10.6973 129.445 9.89648C128.605 9.08594 127.575 8.68066 126.354 8.68066C125.241 8.68066 124.289 9.04688 123.498 9.7793C122.707 10.502 122.224 11.4395 122.048 12.5918H130.998ZM142.562 6.82031V8.53418C144.349 7.24512 145.979 6.60059 147.454 6.60059C148.372 6.60059 149.129 6.82031 149.725 7.25977C150.33 7.68945 150.726 8.22168 150.911 8.85645C151.097 9.48145 151.189 10.3994 151.189 11.6104V18.5244H153.577V21H148.406V11.7275C148.406 10.6533 148.245 9.95508 147.923 9.63281C147.601 9.30078 147.205 9.13477 146.736 9.13477C145.506 9.13477 144.114 9.73535 142.562 10.9365V18.5244H145.008V21H137.288V18.5244H139.778V9.2959H137.288V6.82031H142.562ZM156.088 9.2959V6.82031H157.934V4.6377L160.717 2.08887V6.82031H163.339V9.2959H160.717V16.1807C160.717 17.2842 160.775 17.9678 160.893 18.2314C161.02 18.4854 161.327 18.6123 161.815 18.6123C162.333 18.6123 162.841 18.5146 163.339 18.3193V20.8535C162.626 21.1074 161.913 21.2344 161.2 21.2344C160.351 21.2344 159.662 21.0488 159.135 20.6777C158.607 20.2969 158.275 19.8232 158.139 19.2568C158.002 18.6904 157.934 17.7139 157.934 16.3271V9.2959H156.088ZM184.438 12.709L187.09 14.1885C186.494 16.4541 185.288 18.2119 183.472 19.4619C181.665 20.7021 179.585 21.3223 177.231 21.3223C174.146 21.3223 171.67 20.3213 169.805 18.3193C167.939 16.3174 167.007 13.8418 167.007 10.8926C167.007 7.66016 167.944 5.08691 169.819 3.17285C171.694 1.25879 174.141 0.301758 177.158 0.301758C179.824 0.301758 182.065 1.0293 183.882 2.48438V0.624023H186.519V7.17188H183.882C183.296 5.84375 182.393 4.81836 181.172 4.0957C179.951 3.36328 178.667 2.99707 177.319 2.99707C175.288 2.99707 173.618 3.72949 172.31 5.19434C171.011 6.65918 170.361 8.50977 170.361 10.7461C170.361 13.041 171.06 14.916 172.456 16.3711C173.853 17.8262 175.508 18.5537 177.422 18.5537C178.994 18.5537 180.425 18.0508 181.714 17.0449C183.003 16.0293 183.911 14.584 184.438 12.709ZM191.168 13.9102C191.168 11.7227 191.891 9.93066 193.336 8.53418C194.781 7.12793 196.544 6.4248 198.624 6.4248C200.665 6.4248 202.418 7.11816 203.883 8.50488C205.348 9.88184 206.08 11.6836 206.08 13.9102C206.08 16.1367 205.348 17.9434 203.883 19.3301C202.428 20.7168 200.675 21.4102 198.624 21.4102C196.515 21.4102 194.742 20.707 193.307 19.3008C191.881 17.8945 191.168 16.0977 191.168 13.9102ZM194.112 13.9102C194.112 15.3066 194.547 16.4541 195.416 17.3525C196.295 18.2412 197.364 18.6855 198.624 18.6855C199.903 18.6855 200.973 18.2363 201.832 17.3379C202.701 16.4297 203.136 15.2871 203.136 13.9102C203.136 12.5234 202.696 11.3809 201.817 10.4824C200.938 9.58398 199.874 9.13477 198.624 9.13477C197.315 9.13477 196.236 9.59375 195.387 10.5117C194.537 11.4297 194.112 12.5625 194.112 13.9102ZM212.238 18.5244V9.2959H209.382V6.82031H214.465V10.0137C214.777 9.18359 215.212 8.49512 215.769 7.94824C216.325 7.40137 216.911 7.04004 217.526 6.86426C218.151 6.68848 219.001 6.60059 220.075 6.60059H220.808V9.41309H220.251C218.835 9.41309 217.775 9.55469 217.072 9.83789C216.379 10.1211 215.861 10.6387 215.52 11.3906C215.188 12.1328 215.021 13.4707 215.021 15.4043V18.5244H218.112V21H209.382V18.5244H212.238ZM237.322 14.6133H225.398C225.574 15.9219 226.092 16.9814 226.951 17.792C227.811 18.6025 228.909 19.0078 230.247 19.0078C232.19 19.0078 233.729 18.2266 234.861 16.6641L237.322 17.748C236.521 18.9883 235.481 19.9111 234.202 20.5166C232.923 21.1123 231.585 21.4102 230.188 21.4102C228.021 21.4102 226.165 20.7363 224.622 19.3887C223.089 18.0312 222.322 16.2051 222.322 13.9102C222.322 11.7324 223.069 9.94043 224.563 8.53418C226.067 7.12793 227.791 6.4248 229.734 6.4248C231.639 6.4248 233.362 7.11328 234.905 8.49023C236.458 9.85742 237.264 11.8984 237.322 14.6133ZM234.451 12.5918C234.256 11.5957 233.738 10.6973 232.898 9.89648C232.059 9.08594 231.028 8.68066 229.808 8.68066C228.694 8.68066 227.742 9.04688 226.951 9.7793C226.16 10.502 225.677 11.4395 225.501 12.5918H234.451Z"
                    fill={theme.palette.primary.main}
                />
            </svg>
        </ButtonBase>
    );
};

export default LogoSection;