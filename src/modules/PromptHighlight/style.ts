import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => {
  const prefix = `${prefixCls}-highlighter`;
  return {
    container: css`
      pointer-events: none;
      position: absolute;
      overflow: hidden auto;
      padding: 8px;

      pre {
        font-family: var(--font) !important;
        font-size: var(--input-text-size) !important;
        line-height: 1.5 !important;
        color: ${token.colorSuccess};
        text-overflow: ellipsis !important;
        word-wrap: break-word;
        white-space: pre-wrap;
        vertical-align: bottom !important;
      }
    `,
    loading: cx(
      stylish.blur,
      css`
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 34px;
        padding: 0 8px;

        font-family: ${token.fontFamilyCode};
        color: ${token.colorTextTertiary};

        border-radius: ${token.borderRadius};
      `,
    ),
    shiki: cx(
      `${prefix}-shiki`,
      css`
        margin: 0;
        padding: var(--input-border-width);

        .shiki {
          overflow-x: auto;
          margin: 0;
          padding: 0;
          background: none !important;

          code,
          code span {
            font-family: var(--font) !important;
          }
        }
      `,
    ),
  };
});
