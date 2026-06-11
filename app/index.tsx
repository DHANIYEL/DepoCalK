import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [oldDeposit, setOldDeposit] = useState("");
  const [oldLoan, setOldLoan] = useState("");

  const [todayDeposit, setTodayDeposit] = useState("");
  const [todayLoan, setTodayLoan] = useState("");
  const [interest, setInterest] = useState("");
  const [fine, setFine] = useState("");
  const [others, setOthers] = useState("");

  const todayTotal = useMemo(() => {
    return (
      Number(todayDeposit || 0) +
      Number(todayLoan || 0) +
      Number(interest || 0) +
      Number(fine || 0) +
      Number(others || 0)
    );
  }, [todayDeposit, todayLoan, interest, fine, others]);

  const depositBalance = useMemo(() => {
    return Number(oldDeposit || 0) + Number(todayDeposit || 0);
  }, [oldDeposit, todayDeposit]);

  const loanBalance = useMemo(() => {
    return Number(oldLoan || 0) - Number(todayLoan || 0);
  }, [oldLoan, todayLoan]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Daily Collection</Text>
          <Text style={styles.subtitle}>Loan & Deposit Balance Calculator</Text>
        </View>

        {/* Old Balance */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Old Balance Amount</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Deposit Balance</Text>
            <TextInput
              value={oldDeposit}
              onChangeText={setOldDeposit}
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter Deposit Balance"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loan Balance</Text>
            <TextInput
              value={oldLoan}
              onChangeText={setOldLoan}
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter Loan Balance"
            />
          </View>
        </View>

        {/* Today's Collection */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today&apos;s Collection</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Deposit</Text>
            <TextInput
              value={todayDeposit}
              onChangeText={setTodayDeposit}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loan</Text>
            <TextInput
              value={todayLoan}
              onChangeText={setTodayLoan}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Interest</Text>
            <TextInput
              value={interest}
              onChangeText={setInterest}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fine</Text>
            <TextInput
              value={fine}
              onChangeText={setFine}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Others</Text>
            <TextInput
              value={others}
              onChangeText={setOthers}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>

        {/* Today's Total */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Today&apos;s Total Collection</Text>
          <Text style={styles.totalValue}>₹ {todayTotal.toLocaleString()}</Text>
        </View>

        {/* Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Balance Summary</Text>

          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>Deposit Balance</Text>
              <Text style={styles.depositValue}>
                ₹ {depositBalance.toLocaleString()}
              </Text>
            </View>

            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>Loan Balance</Text>
              <Text style={styles.loanValue}>
                ₹ {loanBalance.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },

  container: {
    padding: 18,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E293B",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: "#64748B",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 15,
  },

  inputGroup: {
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 6,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 18,
    color: "#0F172A",
  },

  totalCard: {
    backgroundColor: "#EF4444",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
    marginBottom: 18,
    elevation: 5,
  },

  totalLabel: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  totalValue: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  summaryBox: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#F8FAFC",
  },

  summaryTitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 8,
  },

  depositValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#16A34A",
  },

  loanValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#DC2626",
  },
});
