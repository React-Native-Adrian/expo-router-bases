import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

import { cn } from '@/utils/shared/cn';

interface CustomButtonProps extends PressableProps {
  label: string;
  color?: 'primary' | 'secondary' | 'tertiary';

  variant?: 'contained' | 'text' | 'outlined';
  className?: string;
  textClassName?: string;
}

// forwardRef para usarlo en Link asChild
const CustomButton = React.forwardRef<View, CustomButtonProps>(
  (
    {
      label,
      color = 'primary',
      variant = 'contained',
      className,
      textClassName,
      ...rest
    },
    ref
  ) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color];
    const btnOutlineColor = {
      primary: 'border-primary',
      secondary: 'border-secondary',
      tertiary: 'border-tertiary',
    }[color];

    const textColor = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
    }[color];

    if (variant === 'text') {
      return (
        <Pressable className={cn('p-3', className)} {...rest} ref={ref}>
          <Text
            className={cn(
              textColor,
              'text-center font-work-medium',
              textClassName
            )}
          >
            {label}
          </Text>
        </Pressable>
      );
    }

    if (variant === 'outlined') {
      return (
        <Pressable
          className={cn(
            'p-3 rounded-md border',
            btnOutlineColor,
            textColor,
            className
          )}
          {...rest}
          ref={ref}
        >
          <Text
            className={cn(
              textColor,
              'text-center font-work-medium',
              textClassName
            )}
          >
            {label}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={cn(
          'p-3 rounded-md',
          btnColor,
          'active:opacity-90',
          className
        )}
        {...rest}
        ref={ref}
      >
        <Text
          className={cn(
            'text-white text-center font-work-medium',
            textClassName
          )}
        >
          {label}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
