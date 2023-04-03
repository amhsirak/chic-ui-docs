import React from 'react'
import { Steps } from 'chic-ui'

export function Example() {
    return (
        <Steps active={1} type="primary" direction="horizontal">
            <Steps.Step title="Step One" subTitle="Step one details" />
            <Steps.Step title="Step Two" subTitle="Step two details" />
            <Steps.Step title="Step Three" subTitle="Step three details" />
            <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>
    );
}

export function VerticalSteps() {
    return (
        <Steps active={1} type="primary" direction="vertical">
            <Steps.Step title="Step One" subTitle="Step one details" />
            <Steps.Step title="Step Two" subTitle="Step two details" />
            <Steps.Step title="Step Three" subTitle="Step three details" />
            <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>
    );
}

export function ResponsiveSteps() {
    return (
        <Steps active={1} type="primary" responsive="true">
            <Steps.Step title="Step One" subTitle="Step one details" />
            <Steps.Step title="Step Two" subTitle="Step two details" />
            <Steps.Step title="Step Three" subTitle="Step three details" />
            <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>
    );
}

export function IconSteps() {
    return (
        <Steps active={1} type="primary">
            <Steps.Step title="Step One" subTitle="Step one details" icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            } />
            <Steps.Step title="Step Two" subTitle="Step two details" />
            <Steps.Step title="Step Three" subTitle="Step three details"  />
            <Steps.Step title="Step Four" subTitle="Step four details"  />
        </Steps>
    );
}