import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    false && 'has-top-divider',
    false && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    false && 'has-top-divider',
    false && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xs text-color-primary fw-600 tt-u mb-8">
                  Meet your head tutor
                </div>
                <h3 className="mt-0 mb-12">
                  David Hasani
                  </h3>
                <p className="m-0" style={{color:"white"}}>
                  SAT: 1520  |  ACT: 35 <br/> <br/>
                  Education: BS, Computer Science & BA, Economics from the University of Virginia (Summa Cum Laude) <br/> <br/>
                  Experience: Has tutored math, science, and english since high school and serves as a teaching assistant 
                  for 1,000+ students in three advanced computer science classes at UVA. Will be working full-time at 
                  Amazon as a Software Engineer after graduating in May 2023.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/headshot-david.png')}
                  alt="Features split 01"
                  width={352}
                  height={264} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xs text-color-primary fw-600 tt-u mb-8">
                  What makes us different  
                </div>
                <h3 className="mt-0 mb-12">
                  We're Unique
                </h3>
                <p className="m-0" style={{color:"white"}}>
                  We only get paid if your performance improves — no exceptions.
                  We don't have annoying contracts that lock you in — you can quit anytime.
                  We spend tons of hours creating fully personalized plans — no cookie-cutter study templates here.
                  We work around you — online tutoring through Zoom means we can accommodate any schedule.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  // imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/investor.png')}
                  alt="Features split 02"
                  width={396}
                  height={297} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;