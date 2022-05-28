import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { reactReplaceElements, reactReplace } from '@utils/react.util';

import { Button } from '@components/button';

import { Header } from '@layouts/header';
import { Footer } from '@layouts/footer';

import DocumentPdfSvg from '@svg/document-pdf.svg';

import {
  Article,
  ArticleAside,
  ArticleAsideGroup,
  ArticleHeader,
  ArticleHeading,
  ArticleLead,
  ArticleList,
  ArticleListType,
  ArticleParagraph,
  ArticleQuote,
} from '@layouts/article';

import CONTACTS from '@mock-data/contacts.json';

import Line1Svg from './svg/line-1.svg';
import Line2Svg from './svg/line-2.svg';
import Line3Svg from './svg/line-3.svg';
import Line4Svg from './svg/line-4.svg';

import style from './style.module.scss';

import DATA from './data.json';

export const Resume = () => {
  const { t, i18n } = useTranslation();

  const downloadButtonLink = DATA.downloadButtonLink[i18n.language];

  return (
    <>
      <Helmet>
        <title>{t('HeadTitle.Resume')}</title>
      </Helmet>
      <Header />
      <Article>
        <ArticleAsideGroup>
          <ArticleHeader>{t('Resume.Title')}</ArticleHeader>
          <ArticleAside
            className={style.avatar}
            srcSet={DATA.imageSrcSet}
            src={DATA.imageSrc}
            text={t('Resume.AvatarCaption')}
          >
            <Line1Svg className={style.line1} />
          </ArticleAside>
        </ArticleAsideGroup>
        <ArticleLead>{ t('Resume.Lead') }</ArticleLead>
        <ArticleParagraph>{ t('Resume.About') }</ArticleParagraph>
        <ArticleQuote
          author={t('Resume.Quote.Author')}
          info={t('Resume.Quote.Info')}
        >
          {
            reactReplaceElements(t('Resume.Quote'), {
              span: <span className={style.lineGroup} key="line-2" />,
              line: <Line2Svg className={style.line2} />,
            })
          }
        </ArticleQuote>
        <ArticleList
          title={t('Resume.PresentTense.Title')}
          list={t('Resume.PresentTense.List', { returnObjects: true })}
        />
        <ArticleList
          title={t('Resume.PastTense.Title')}
          list={t('Resume.PastTense.List', { returnObjects: true })}
        />
        <ArticleList
          title={t('Resume.Education.Title')}
          list={t('Resume.Education.List', { returnObjects: true })}
        />
        <ArticleList
          title={t('Resume.Skills.Title')}
          list={
            reactReplace(t('Resume.Skills.List', { returnObjects: true }),
              'JavaScript',
              <span key={2} className={style.lineGroup}>JavaScript<Line3Svg className={style.line3} /></span>,
            )
          }
          type={ArticleListType.Ordered}
        />
        <ArticleHeading level="h3">{ t('Resume.Contacts.Title') }</ArticleHeading>

        <ArticleParagraph>
          {
            reactReplaceElements(t('Resume.Contacts.Info'), {
              tme: <a href={CONTACTS.telegram.link} target="_blank" rel="noreferrer" />,
              mailto: <a href={CONTACTS.email.link} target="_blank" rel="noreferrer" />,
            })
          }
        </ArticleParagraph>

        {
          downloadButtonLink &&
          <div className={cn(style.lineGroup, 'mt-4xl')}>
            <Button
              className={style.downloadButton}
              text={t('Resume.DownloadButton')}
              href={downloadButtonLink}
              icon={<DocumentPdfSvg />}
              download
            />
            <Line4Svg className={style.line4} />
          </div>
        }

      </Article>
      <Footer />
    </>
  );
};
