import { h, defineComponent, PropType } from "vue";
import { ElSelect, ElOption, ElOptionGroup } from "element-plus";

interface OptionListEnum {
  label: string;
  value: string | number;
  disabled?: boolean;

  children?: OptionListEnum[];
}

export const OptionList = defineComponent({
  name: "OptionList",
  props: {
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    options: {
      type: Array as PropType<OptionListEnum[]>,
      required: true,
      default() {
        return [];
      },
    },
  },
  emits: [
    "update:modelValue",
    "change",
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
  ],
  setup(props, { emit, attrs }) {
    const onInput = (val: OptionListEnum["value"]) => {
      emit("update:modelValue", val);
    };

    return () => h(
      ElSelect,
      {
        ...attrs,
        modelValue: props.modelValue,
        "onUpdate:modelValue": onInput,
      },
      () => props.options.map((item, index) => {
        if (Array.isArray(item.children) && item.children.length > 0) {
          return h(
            ElOptionGroup,
            {
              label: item.label,
              value: item.value,
              disabled: item.disabled,
              key: `option-group-item-${index}-${item.value}`,
            },
            () => item.children!.map((t, idx) => h(ElOption, {
              label: t.label,
              value: t.value,
              key: `nested-option-item-${idx}-${t.value}`,
            })),
          );
        }

        return h(ElOption, {
          label: item.label,
          value: item.value,
          key: `option-item-${index}-${item.value}`,
        });
      }),
    );
  },
});
