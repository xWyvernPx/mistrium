import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckoutProgressBar from "../../_components/checkout/CheckoutProgressBar";
import FirstForm from "../../_components/checkout/FirstForm";
import OrderReview from "../../_components/checkout/OrderReview";
import PaymentForm from "../../_components/checkout/PaymentForm";
import ShippingForm from "../../_components/checkout/ShippingForm";
import { PrimaryOutlineButton } from "../../_components/common/button/Button";
import useCart from "../../_hook/useCart";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAddress from "../../_hook/useAddress";
import useCheckout from "../../_hook/useCheckout";
import Spinner from "../../_components/common/loader/Spinner";

const checkoutFormSchema = yup
  .object({
    fullName: yup.string().required(),
    phone: yup.string().required(),
  })
  .required();

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isComplete, setComplete] = useState(false);

  const [stage, setStage] = useState({
    step: 1,
  });
  const { ...a11y } = useCheckout();
  useEffect(() => {
    if (
      // a11y.checkoutPayload.name &&
      // a11y.checkoutPayload.phone &&
      a11y.checkoutPayload.province_id > 0 &&
      a11y.checkoutPayload.district_id > 0 &&
      a11y.checkoutPayload.ward_id > 0 &&
      a11y.checkoutPayload.details
    ) {
      setComplete(true);
    } else setComplete(false);
  }, [a11y.checkoutPayload]);
  return (
    <CheckoutPageWrapper>
      <CheckoutPageHeadline>
        <BackButton onClick={() => navigate(-1)}>
          <IconArrowLeft size={30} />
        </BackButton>
        <h2>Checkout</h2>
      </CheckoutPageHeadline>
      <MainPageLayout>
        <OrderFormArea>
          <CheckoutProgressBar step={stage.step} width={"80%"} />
          {stage.step === 2 && <FormHeadline>Delivery Service</FormHeadline>}
          {stage.step === 3 && <FormHeadline>Payment Method</FormHeadline>}
          <CheckoutForm>
            <FormSlider>
              {stage.step === 1 && (
                <FirstForm a11y={{ ...a11y, setComplete }} />
              )}
              {stage.step === 2 && <ShippingForm setComplete={setComplete} />}
              {stage.step === 3 && <PaymentForm />}
            </FormSlider>
            <SwitchFormButtonsWrapper>
              <CustomeOutlineButton
                type="button"
                disabled={stage.step === 1}
                onClick={() => setStage({ step: stage.step - 1 })}
              >
                <IconArrowLeft />
              </CustomeOutlineButton>
              <CustomeOutlineButton
                type="button"
                disabled={stage.step === 3 || !isComplete}
                onClick={() => setStage({ step: stage.step + 1 })}
              >
                <IconArrowRight />
              </CustomeOutlineButton>
            </SwitchFormButtonsWrapper>
          </CheckoutForm>
        </OrderFormArea>

        <OrderReview />
      </MainPageLayout>
      {a11y.checkoutPayload.isProcessing && <Spinner />}
    </CheckoutPageWrapper>
  );
};

const CheckoutPageWrapper = styled.div`
  margin-top: var(--header-height);
  padding: 0rem var(--section-x-padding);
  height: fit-content;
  width: 100%;
`;
const CheckoutPageHeadline = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  h2 {
    font-size: 4rem;
    font-weight: 500;
  }
`;
const MainPageLayout = styled.section`
  margin-top: 2rem;
  height: fit-content;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
`;
const OrderFormArea = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
const BackButton = styled.button``;
const CheckoutForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SwitchFormButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;
const CustomeOutlineButton = styled(PrimaryOutlineButton)`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:disabled {
    border-color: var(--gray-light);
    color: var(--gray-light);
  }
`;
const FormHeadline = styled.span`
  font-size: 3.2rem;
  margin: 0 auto;
  margin-top: 5rem;
`;
const FormSlider = styled.div`
  /* display: flex; */
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export default CheckoutPage;
