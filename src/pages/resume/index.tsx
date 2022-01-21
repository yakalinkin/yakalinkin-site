import React from 'react';
import { Helmet } from 'react-helmet';
import cn from 'classnames';

import { replace } from '@utils/replace.util';

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
  ArticleHeadingLevel,
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
  const data = generateData();

  return (
    <>
      <Helmet>
        <title>{ data.headTitle }</title>
      </Helmet>
      <Header />
      <Article>
        <ArticleAsideGroup>
          <ArticleHeader>{ data.title }</ArticleHeader>
          <ArticleAside
            className={style.avatar}
            srcSet={data.imageSrcSet}
            src={data.imageSrc}
            text={data.imageCaption}
          >
            <Line1Svg className={style.line1} />
          </ArticleAside>
        </ArticleAsideGroup>

        <ArticleLead>{ data.lead }</ArticleLead>

        {
          data.about.split('\n').map((paragraph, idx) => (
            <ArticleParagraph key={idx}>{ paragraph }</ArticleParagraph>
          ))
        }

        <ArticleQuote>{ data.quote }</ArticleQuote>

        <ArticleList
          title={data.presentTenseTitle}
          list={data.presentTenseList}
        />

        <ArticleList
          title={data.pastTenseTitle}
          list={data.pastTenseList}
        />

        <ArticleList
          title={data.educationTitle}
          list={data.educationList}
        />

        <ArticleList
          title={data.skillsTitle}
          list={data.skillsList}
          type={ArticleListType.Ordered}
        />

        <ArticleHeading level={ArticleHeadingLevel.H3}>{ data.contactsTitle }</ArticleHeading>

        <ArticleParagraph>{ data.contactsInfo }</ArticleParagraph>

        <div className={cn(style.lineGroup, 'mt-4xl')}>
          <Button
            className={style.downloadButton}
            text={data.downloadButtonText}
            href={data.downloadButtonLink}
            icon={<DocumentPdfSvg />}
            download
          />
          <Line4Svg className={style.line4} />
        </div>

      </Article>
      <Footer />
    </>
  );
};

function generateData() {
  const data = { ...DATA };

  data.quote = replace(
    data.quote,
    'победи',
    <span className={style.lineGroup} key="line-2">победи<Line2Svg className={style.line2} /></span>,
  ) as any;

  data.contactsInfo = replace(
    data.contactsInfo,
    '@yakalinkin',
    <a href={CONTACTS.telegram.link} target="_blank" rel="noreferrer" key="tme">@yakalinkin</a>,
  ) as any;

  data.contactsInfo = replace(
    data.contactsInfo,
    'yakalinkin.job@gmail.com',
    <a href={CONTACTS.email.link} target="_blank" rel="noreferrer" key="mailto">yakalinkin.job@gmail.com</a>,
  ) as any;

  data.skillsList[0].tags = replace(
    DATA.skillsList[0].tags,
    'JavaScript',
    <span key={2} className={style.lineGroup}>JavaScript<Line3Svg className={style.line3} /></span>,
  ) as any;

  return data;
}
