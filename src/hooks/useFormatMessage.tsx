import { useIntl } from "react-intl";

export const useFormatMessage = (messageId: string, values?: any) => {
  return useIntl().formatMessage({ id: messageId }, values);
};
