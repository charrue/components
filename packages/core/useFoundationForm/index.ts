import { computed, ref, UnwrapRef } from "vue";
import { useTimeoutBoolean } from "@charrue/composable";

interface useFoundationFormOptions<T> {
  initialValue: T;
  disabledFactory?: (data: T | UnwrapRef<T>) => boolean;
  onError?: (e: any) => void;
  onSubmit: (data: T | UnwrapRef<T>) => Promise<any>;
}

const defaultDisabledFactory = (data: Record<string, any>) => Object.values(data).every(Boolean);
export const useFoundationForm = <T extends object>(options: useFoundationFormOptions<T>) => {
  const {
    initialValue,
    disabledFactory = defaultDisabledFactory,
    onError,
    onSubmit,
  } = options;

  const formData = ref<T>(initialValue);
  const [loading, { setState: setLoadingState }] = useTimeoutBoolean(false);
  const disabled = computed(() => disabledFactory(formData.value));

  const elFormRef = ref();

  const submitForm = async () => {
    try {
      await elFormRef.value?.validate();
      setLoadingState(true);
      await onSubmit(formData.value);
    } catch (e) {
      onError?.(e);
    }
  };

  const onCancel = () => {
    elFormRef.value?.resetFields();
  };

  return {
    formData,
    loading,
    disabled,
    elFormRef,

    onSubmit: submitForm,
    onCancel,
  };
};
