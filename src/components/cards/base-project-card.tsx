import styled from '@emotion/styled';

import { ExtLinkCard } from '~/elements/card';

export const BaseProjectCard = styled(ExtLinkCard)`
  --border-radius: 10px;
  --shadow-one-size: 6px;
  --shadow-two-size: 12px;
  border: 1px solid var(--divider);
  width: 100%;
  position: relative;
  height: 192px;
  max-height: 192px;
  max-width: 450px;
  overflow: hidden;

  background: var(--b-bg-grad-color);
  background: -moz-linear-gradient(
    var(--gradient-angle),
    var(--a-bg-grad-color) 0%,
    var(--b-bg-grad-color) 60%,
    var(--c-bg-grad-color) 100%
  );
  background: -webkit-linear-gradient(
    var(--gradient-angle),
    var(--a-bg-grad-color) 0%,
    var(--b-bg-grad-color) 60%,
    var(--c-bg-grad-color) 100%
  );
  background: linear-gradient(
    var(--gradient-angle),
    var(--a-bg-grad-color) 0%,
    var(--b-bg-grad-color) 60%,
    var(--c-bg-grad-color) 100%
  );

  .preview {
    position: absolute;
    transform: translateX(25%) translateY(20%);
    height: 192px;
    max-height: 192px;
    border-radius: var(--border-radius);
    & *,
    & * img {
      height: 168px !important;
      max-height: 168px !important;
      object-fit: contain !important;
    }

    @media (min-width: 640px) {
      transform: translateX(25%) translateY(15%);

      & *,
      & * img {
        height: 256px !important;
        max-height: 256px !important;
      }
    }

    @media (min-width: 960px) {
      transform: translateX(50%) translateY(6%);
    }
  }

  .wrapper {
    height: 100%;
    max-height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--projects-card-color);

    .content {
      padding: 1.1rem 1.2rem 1rem;
      transform: translateY(-5%);

      .icon-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.4rem;
        margin-left: -0.2rem;
        text-shadow: 1px 2px 2px var(--projects-card-text-shadow);

        img {
          opacity: 0.9;
          filter: drop-shadow(0 1px 2px var(--projects-card-text-shadow));
        }

        h5 {
          margin-left: 0.9rem;
          font-size: calc(var(--base-font-size) * 1.75);
        }
      }

      p {
        font-size: 0.95rem;
        opacity: 0;
        color: var(--text-primary);
        text-decoration: none;
        pointer-events: none;
        visibility: hidden;
        user-select: none;
      }

      .stack {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        user-select: none;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.6rem;

        li {
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          height: 24px;
          width: 24px;

          * {
            width: 100%;
            height: 100%;
          }

          &:not(:last-of-type):not(.no-mr) {
            margin-right: 0.5rem;
          }
        }

        &:hover,
        &:focus {
          opacity: 1;
        }
      }
    }
  }

  &:hover,
  &:focus {
    .preview {
      & img {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }
    }

    .wrapper {
      background-color: var(--projects-card-color-hover);
      -webkit-backdrop-filter: saturate(200%) blur(6px);
      backdrop-filter: saturate(200%) blur(6px);

      .content {
        transform: translateY(0);

        .iconTitle {
          img {
            -webkit-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -ms-transform: scale(1.05);
            -o-transform: scale(1.05);
            transform: scale(1.05);
          }

          h5 {
            color: var(--hl-color);
            text-decoration: underline;
            -webkit-text-decoration-style: solid;
            -webkit-text-decoration-color: var(--hl-color);
            text-decoration: underline solid var(--hl-color);
          }
        }

        p {
          user-select: unset;
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          color: var(--text-primary);
        }

        .stack,
        .stack:hover,
        .stack:focus {
          user-select: unset;
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
        }
      }
    }
  }
`;