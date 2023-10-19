import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
@media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
}
`;

export const Title = styled.h1`
  ${({ theme, size, colordark, uppercase }) => css`
    color: ${colordark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `}
`;
