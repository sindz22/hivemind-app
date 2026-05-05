import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography } from '../theme/colors';
import HexagonBackground from '../components/HexagonBackground';
import GlassCard from '../components/GlassCard';
import HoneyButton from '../components/HoneyButton';
import { Ionicons } from '@expo/vector-icons';

export default function AuthScreen({ navigation }) {
  const [mode, setMode] = useState('login');
  const [focusedField, setFocusedField] = useState('');
  const [loginForm, setLoginForm] = useState({ emailOrUsername: '', password: '' });
  const [signUpForm, setSignUpForm] = useState({ name: '', email: '', password: '' });

  const isLogin = mode === 'login';

  const handlePrimaryAction = () => {
    if (isLogin) {
      console.log('Login submitted', loginForm);
      return;
    }
    console.log('Sign up submitted', signUpForm);
  };

  const getInputStyle = (fieldName) => [
    styles.input,
    focusedField === fieldName && styles.inputFocused,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HexagonBackground />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image source={require('../assets/bee_mascot.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to HiveMind</Text>
          <Text style={styles.subtitle}>Focus smarter, not harder</Text>
        </View>

        <GlassCard style={styles.card} intensity={26}>
          <View style={styles.toggleWrap}>
            <TouchableOpacity
              style={[styles.toggleButton, isLogin && styles.toggleButtonActive]}
              onPress={() => setMode('login')}
              activeOpacity={0.85}
            >
              <Text style={[styles.toggleText, isLogin && styles.toggleTextActive]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, !isLogin && styles.toggleButtonActive]}
              onPress={() => setMode('signup')}
              activeOpacity={0.85}
            >
              <Text style={[styles.toggleText, !isLogin && styles.toggleTextActive]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {isLogin ? (
            <View style={styles.formWrap}>
              <TextInput
                style={getInputStyle('login-email')}
                value={loginForm.emailOrUsername}
                onChangeText={(text) => setLoginForm((prev) => ({ ...prev, emailOrUsername: text }))}
                placeholder="Email / Username"
                placeholderTextColor={Colors.textTertiary}
                autoCapitalize="none"
                onFocus={() => setFocusedField('login-email')}
                onBlur={() => setFocusedField('')}
              />
              <TextInput
                style={getInputStyle('login-password')}
                value={loginForm.password}
                onChangeText={(text) => setLoginForm((prev) => ({ ...prev, password: text }))}
                placeholder="Password"
                placeholderTextColor={Colors.textTertiary}
                secureTextEntry
                autoCapitalize="none"
                onFocus={() => setFocusedField('login-password')}
                onBlur={() => setFocusedField('')}
              />
            </View>
          ) : (
            <View style={styles.formWrap}>
              <TextInput
                style={getInputStyle('signup-name')}
                value={signUpForm.name}
                onChangeText={(text) => setSignUpForm((prev) => ({ ...prev, name: text }))}
                placeholder="Name"
                placeholderTextColor={Colors.textTertiary}
                onFocus={() => setFocusedField('signup-name')}
                onBlur={() => setFocusedField('')}
              />
              <TextInput
                style={getInputStyle('signup-email')}
                value={signUpForm.email}
                onChangeText={(text) => setSignUpForm((prev) => ({ ...prev, email: text }))}
                placeholder="Email"
                placeholderTextColor={Colors.textTertiary}
                autoCapitalize="none"
                onFocus={() => setFocusedField('signup-email')}
                onBlur={() => setFocusedField('')}
              />
              <TextInput
                style={getInputStyle('signup-password')}
                value={signUpForm.password}
                onChangeText={(text) => setSignUpForm((prev) => ({ ...prev, password: text }))}
                placeholder="Password"
                placeholderTextColor={Colors.textTertiary}
                secureTextEntry
                autoCapitalize="none"
                onFocus={() => setFocusedField('signup-password')}
                onBlur={() => setFocusedField('')}
              />
            </View>
          )}

          <HoneyButton
            title={isLogin ? 'Login' : 'Sign Up'}
            icon={isLogin ? 'log-in-outline' : 'person-add-outline'}
            onPress={handlePrimaryAction}
            style={styles.primaryAction}
          />

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            activeOpacity={0.85}
            onPress={() => console.log('Continue with Google pressed')}
          >
            <Ionicons name="logo-google" size={18} color={Colors.primary} />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          <HoneyButton
            title="Continue without login"
            icon="arrow-forward-circle-outline"
            variant="secondary"
            onPress={() => navigation.navigate('MainTabs')}
            style={styles.secondaryAction}
          />
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'rgba(251, 192, 45, 0.6)',
    borderRadius: 50,
    marginBottom: 14,
  },
  card: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderColor: 'rgba(251, 192, 45, 0.22)',
    borderWidth: 1,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 7,
  },
  title: {
    ...Typography.h2,
    color: Colors.primaryLight,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...Typography.body,
    textAlign: 'center',
  },
  toggleWrap: {
    flexDirection: 'row',
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    padding: 4,
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: 'rgba(251, 192, 45, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(251, 192, 45, 0.45)',
  },
  toggleText: {
    ...Typography.body,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  toggleTextActive: {
    color: Colors.primaryLight,
  },
  formWrap: {
    gap: 12,
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(15, 15, 15, 0.9)',
    color: Colors.text,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  inputFocused: {
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryAction: {
    marginTop: 2,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  dividerText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginHorizontal: 10,
    letterSpacing: 1.2,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(251, 192, 45, 0.4)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingVertical: 12,
    marginBottom: 14,
  },
  googleText: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  secondaryAction: {
    marginTop: 4,
  },
});
