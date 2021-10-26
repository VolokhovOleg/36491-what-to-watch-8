import {InlineStyleType} from '../../types';

function Spinner(): JSX.Element {
  const containerStyle: InlineStyleType = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <style dangerouslySetInnerHTML={{__html: '\n\n.spinner {\n  animation: rotator 1.4s linear infinite;\n}\n\n@keyframes rotator {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n}\n\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  animation:\n    dash 1.4s ease-in-out infinite, \n    colors 5.6s ease-in-out infinite;\n}\n\n@keyframes colors {\n\t0% { stroke: #4285F4; }\n\t25% { stroke: #DE3E35; }\n\t50% { stroke: #F7C223; }\n\t75% { stroke: #1B9A59; }\n  100% { stroke: #4285F4; }\n}\n\n@keyframes dash {\n 0% { stroke-dashoffset: 187; }\n 50% {\n   stroke-dashoffset: 46.75;\n   transform:rotate(135deg);\n }\n 100% {\n   stroke-dashoffset: 187;\n   transform:rotate(450deg);\n }\n}\n  ' }} />
        <circle className="path" fill="none" strokeWidth={6} strokeLinecap="round" cx={33} cy={33} r={30} />
      </svg>
    </div>
  );
}

export default Spinner;
