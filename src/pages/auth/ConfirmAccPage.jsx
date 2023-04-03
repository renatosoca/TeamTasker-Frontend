import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ConfirmAcc, LoadingPage, UnconfirmAcc } from '../../components';
import { useAuth } from '../../hooks';
import { startConfirmAccount } from '../../store';

export const ConfirmAccPage = () => {
  const { dispatch, isConfirmed } = useAuth();
  const { token } = useParams();
  const isRefreshPage = useRef( true );

  useEffect(() => {
    if ( isRefreshPage .current ) {
      dispatch( startConfirmAccount( token ) );
      isRefreshPage .current = false;
    }
    document.title = 'Confirmar | TeamTasker';
  }, [ token ]);

  if ( isConfirmed.msg === '' ) return <LoadingPage />
  
  return (
    <div className="flex items-center justify-center text-white min-h-screen bg-[url(/assets/hero-confirm.jpg)] bg-cover bg-no-repeat bg-center">
      <div className=" p-8 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-lg">
        { isConfirmed?.ok 
          ? <ConfirmAcc />
          : <UnconfirmAcc Message={ isConfirmed?.msg } /> 
        }
      </div>
    </div>
  )
}
