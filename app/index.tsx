import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [oldDeposit, setOldDeposit] = useState("201000");
  const [oldLoan, setOldLoan] = useState("135000");

  const [todayDeposit, setTodayDeposit] = useState("500");
  const [todayLoan, setTodayLoan] = useState("3000");
  const [interest, setInterest] = useState("480");
  const [fine, setFine] = useState("150");
  const [others, setOthers] = useState("100");

  const todayTotal = useMemo(() => {
    return (
      Number(todayDeposit || 0) +
      Number(todayLoan || 0) +
      Number(interest || 0) +
      Number(fine || 0) +
      Number(others || 0)
    );
  }, [todayDeposit, todayLoan, interest, fine, others]);

  const loanDepositBalance = useMemo(() => {
    const depositBalance = Number(oldDeposit || 0) + Number(todayDeposit || 0);

    const loanBalance = Number(oldLoan || 0) - Number(todayLoan || 0);

    return {
      depositBalance,
      loanBalance,
    };
  }, [oldDeposit, oldLoan, todayDeposit, todayLoan]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Daily Collection</Text>

      {/* Header */}
      <View style={styles.row}>
        <Text style={[styles.headerCell, styles.labelCell]}></Text>
        <Text style={styles.headerCell}>Deposit</Text>
        <Text style={styles.headerCell}>Loan</Text>
        <Text style={styles.headerCell}>Interest</Text>
        <Text style={styles.headerCell}>Fine</Text>
        <Text style={styles.headerCell}>Others</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>

      {/* Old Balance */}
      <View style={styles.row}>
        <Text style={[styles.labelCell, styles.labelText]}>
          Old Balance Amount
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={oldDeposit}
          onChangeText={setOldDeposit}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={oldLoan}
          onChangeText={setOldLoan}
        />

        <View style={styles.emptyCell} />
        <View style={styles.emptyCell} />
        <View style={styles.emptyCell} />
        <View style={styles.emptyCell} />
      </View>

      {/* Today's Amount */}
      <View style={styles.row}>
        <Text style={[styles.labelCell, styles.labelText]}>
          Today&apos;s Amount
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={todayDeposit}
          onChangeText={setTodayDeposit}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={todayLoan}
          onChangeText={setTodayLoan}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={interest}
          onChangeText={setInterest}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={fine}
          onChangeText={setFine}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={others}
          onChangeText={setOthers}
        />

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>{todayTotal}</Text>
        </View>
      </View>

      {/* Loan / Deposit Balance */}
      <View style={[styles.row, styles.balanceRow]}>
        <Text style={[styles.labelCell, styles.balanceLabel]}>
          Loan / Deposit Balance
        </Text>

        <View style={styles.balanceCell}>
          <Text style={styles.balanceValue}>
            {loanDepositBalance.depositBalance}
          </Text>
        </View>

        <View style={styles.balanceCell}>
          <Text style={styles.balanceValue}>
            {loanDepositBalance.loanBalance}
          </Text>
        </View>

        <View style={styles.balanceEmpty} />
        <View style={styles.balanceEmpty} />
        <View style={styles.balanceEmpty} />
        <View style={styles.balanceEmpty} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
  },

  headerCell: {
    flex: 1,
    backgroundColor: "#d97706",
    color: "#fff",
    paddingVertical: 12,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
  },

  labelCell: {
    width: 130,
    backgroundColor: "#d9e6f2",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#000",
  },

  labelText: {
    fontWeight: "600",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },

  emptyCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f1f1f1",
  },

  totalBox: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },

  totalText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  balanceRow: {
    backgroundColor: "#8bc34a",
  },

  balanceLabel: {
    backgroundColor: "#8bc34a",
    fontWeight: "bold",
  },

  balanceCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8bc34a",
    minHeight: 55,
  },

  balanceValue: {
    fontSize: 28,
    fontWeight: "bold",
  },

  balanceEmpty: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#8bc34a",
  },
});
